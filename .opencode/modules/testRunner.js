import fs from "fs"
import { execSync } from "child_process"

function ensureTestDirs() {

  fs.mkdirSync("tests/backend", { recursive: true })
  fs.mkdirSync("tests/frontend", { recursive: true })

}

function detectBackendRoutes() {

  const routesDir = "backend/routes"

  if (!fs.existsSync(routesDir)) return []

  return fs.readdirSync(routesDir)
    .map(file => file.replace(".js",""))

}

function detectFrontendPages() {

  const pagesDir = "frontend/pages"

  if (!fs.existsSync(pagesDir)) return []

  return fs.readdirSync(pagesDir)
    .map(file => file.replace(".jsx",""))

}

function generateBackendTest(route) {

  const code = `
import request from "supertest"
import app from "../../backend/server.js"

describe("${route} API", () => {

  it("should respond successfully", async () => {

    const res = await request(app).get("/${route}")

    expect(res.statusCode).toBeLessThan(500)

  })

})
`

  fs.writeFileSync(
    `tests/backend/${route}.test.js`,
    code
  )

}

function generateFrontendTest(page) {

  const code = `
import { render } from "@testing-library/react"
import ${page} from "../../frontend/pages/${page}.jsx"

test("${page} renders", () => {

  render(<${page}/>)

})
`

  fs.writeFileSync(
    `tests/frontend/${page}.test.js`,
    code
  )

}

function runTests() {

  try {

    execSync("npm test", { stdio: "inherit" })

    return "PASSED"

  } catch (err) {

    return "FAILED"

  }

}

function writeReport(status, backendTests, frontendTests) {

  const report = `
# Test Report

Backend Tests Generated:
${backendTests.join("\n")}

Frontend Tests Generated:
${frontendTests.join("\n")}

Test Result:
${status}

Time:
${new Date().toISOString()}
`

  fs.writeFileSync(
    "docs/reference/test-report.md",
    report
  )

}

export default async function testRunner() {

  console.log("Generating test suite")

  ensureTestDirs()

  const backendRoutes = detectBackendRoutes()
  const frontendPages = detectFrontendPages()

  backendRoutes.forEach(generateBackendTest)
  frontendPages.forEach(generateFrontendTest)

  console.log("Running tests")

  const result = runTests()

  writeReport(result, backendRoutes, frontendPages)

  console.log(`Test execution complete (${result})`)

}
