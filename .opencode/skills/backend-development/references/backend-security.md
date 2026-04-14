# Backend Security

Security best practices, OWASP Top 10 mitigation, and modern security standards (2025).

## OWASP Top 10 (2025 RC1)

### New Entries (2025)

- **Supply Chain Failures**
- **Mishandling of Exceptional Conditions**

### Top Vulnerabilities & Mitigation

#### 1. Broken Access Control

Mitigation:
- Implement RBAC
- Deny by default
- Log failures
- Enforce authorization on backend

#### 2. Cryptographic Failures

Mitigation:
- Use Argon2id
- TLS 1.3
- Encrypt sensitive data at rest
- Use `crypto.randomBytes()`

#### 3. Injection Attacks

Mitigation:
- Parameterized queries
- Input validation
- Allow-lists
- Careful ORM usage

```typescript
const query = 'SELECT * FROM users WHERE email = $1';
const result = await db.query(query, [email]);
```

#### 4. Insecure Design

Mitigation:
- Threat modeling
- Security requirements early
- Least privilege
- Defense in depth

#### 5. Security Misconfiguration

Mitigation:
- Remove default accounts
- Disable unnecessary features
- Use security headers
- Minimize attack surface

#### 6. Vulnerable Components

Mitigation:
- Regular dependency updates
- Dependabot or Renovate
- CVE monitoring
- SCA in CI/CD

#### 7. Authentication Failures

Mitigation:
- MFA for admin accounts
- Rate limit login endpoints
- Strong password policy
- Session timeout
- WebAuthn where appropriate

#### 8. Software & Data Integrity Failures

Mitigation:
- Code signing
- Immutable builds
- Checksum verification

#### 9. Logging & Monitoring Failures

Mitigation:
- Log auth events
- Centralized logging
- Suspicious pattern alerts

#### 10. SSRF

Mitigation:
- Validate URLs
- Allow-list external resources
- Network segmentation

## Input Validation

### Validation Strategies

```typescript
class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(12)
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
  password: string;
}
```

```typescript
const allowedFields = ['name', 'email', 'age'];
const sanitized = Object.keys(input)
  .filter(key => allowedFields.includes(key))
  .reduce((obj, key) => ({ ...obj, [key]: input[key] }), {});
```

## Rate Limiting

```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
```

### API-Specific Limits

- Authentication: 10 attempts per 15 min
- Public APIs: 100 requests per 15 min
- Authenticated APIs: 1000 requests per 15 min
- Admin endpoints: 50 requests per 15 min

## Security Headers

```typescript
{
  'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
  'Content-Security-Policy': "default-src 'self'",
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'geolocation=(), microphone=()',
}
```

## Secrets Management

### Best Practices

1. Never commit secrets
2. Use environment-specific secrets
3. Rotate secrets regularly
4. Encrypt at rest
5. Apply least privilege

### Tools

- HashiCorp Vault
- AWS Secrets Manager
- Azure Key Vault
- Pulumi ESC

## API Security Checklist

- [ ] HTTPS/TLS 1.3 only
- [ ] OAuth 2.1 + JWT
- [ ] Rate limiting on all endpoints
- [ ] Input validation on all inputs
- [ ] Parameterized queries
- [ ] Security headers configured
- [ ] CORS configured correctly
- [ ] Error messages do not leak system info
- [ ] Authentication events logged
- [ ] MFA for admin accounts

## Common Security Pitfalls

1. Client-side validation only
2. Using `Math.random()` for tokens
3. Legacy password hashing
4. Trusting user input
5. Weak CORS config
6. Insufficient logging
7. No rate limiting

## Resources

- **OWASP Top 10 (2025):** https://owasp.org/www-project-top-ten/
- **OWASP Cheat Sheets:** https://cheatsheetseries.owasp.org/
- **CWE Top 25:** https://cwe.mitre.org/top25/
- **NIST Guidelines:** https://www.nist.gov/cybersecurity
