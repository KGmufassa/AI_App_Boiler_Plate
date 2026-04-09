#!/usr/bin/env bash
set -euo pipefail

repo_root="${1:-.}"
skills_dir="$repo_root/.opencode/skills"
output_dir="$repo_root/system/reference/markdown"
output_file="$output_dir/agent-skills.md"

mkdir -p "$output_dir"

tmp_file="$(mktemp)"
trap 'rm -f "$tmp_file"' EXIT

{
  echo "# Agent Skills"
  echo
  echo "Generated from \`.opencode/skills\`."
  echo
} > "$tmp_file"

find "$skills_dir" -mindepth 1 -maxdepth 1 -type d | sort | while read -r skill_folder; do
  skill_name="$(basename "$skill_folder")"
  case "$skill_name" in
    plan*) continue ;;
  esac

  skill_file=""
  if [ -f "$skill_folder/SKILL.md" ]; then
    skill_file="$skill_folder/SKILL.md"
  elif [ -f "$skill_folder/skill.md" ]; then
    skill_file="$skill_folder/skill.md"
  else
    file_count="$(find "$skill_folder" -maxdepth 1 -type f -name '*.md' | wc -l | tr -d ' ')"
    if [ "$file_count" = "1" ]; then
      skill_file="$(find "$skill_folder" -maxdepth 1 -type f -name '*.md' | head -n 1)"
    fi
  fi

  if [ -n "$skill_file" ]; then
    rel_path="${skill_file#"$repo_root"/}"
    echo "- [$skill_name](../../$rel_path)" >> "$tmp_file"
  fi
done

mv "$tmp_file" "$output_file"
echo "Wrote $output_file"
