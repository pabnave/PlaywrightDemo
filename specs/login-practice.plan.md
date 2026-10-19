# Practice Login Test Plan

## Application Overview

Browser-based test plan for the Rahul Shetty Academy practice login page and its post-login shop landing page. Demo credentials are the values displayed in the page helper text; do not use personal credentials.

## Test Scenarios

### 1. Practice Login

**Seed:** `tests/seed.spec.ts`

#### 1.1. Login form renders with expected defaults

**File:** `tests/login-practice/login-form.spec.ts`

**Steps:**
  1. Open the seeded login page.
    - expect: Username and Password textboxes are visible and empty.
    - expect: Admin is selected by default; Student is the selected dropdown option.
    - expect: The terms checkbox is unchecked and Sign In is visible.

#### 1.2. User role confirmation can be canceled

**File:** `tests/login-practice/login-role-confirmation.spec.ts`

**Steps:**
  1. Select the User radio option.
    - expect: A confirmation dialog explains that User access has fewer functionalities.
  2. Choose Cancel in the confirmation dialog.
    - expect: The dialog closes and the login page remains available.

#### 1.3. User can sign in with the advertised demo credentials

**File:** `tests/login-practice/user-login.spec.ts`

**Steps:**
  1. Select User and confirm the limited-functionality prompt with Okay.
    - expect: The prompt closes and User remains selected.
  2. Enter the demo username and password shown on the page, check the terms box, and click Sign In.
    - expect: The browser navigates to the ProtoCommerce shop route.
    - expect: The Shop Name heading and the product cards, including iphone X, are visible.

#### 1.4. Blank credentials do not authenticate

**File:** `tests/login-practice/required-credentials.spec.ts`

**Steps:**
  1. Leave Username and Password empty and click Sign In.
    - expect: The browser remains on the login page and does not navigate to the shop.
    - expect: Required-field validation is presented or the fields remain available for correction.

#### 1.5. Invalid credentials do not authenticate

**File:** `tests/login-practice/invalid-credentials.spec.ts`

**Steps:**
  1. Enter an invalid username and password, satisfy any required role confirmation and terms consent, then click Sign In.
    - expect: Authentication does not reach the shop route.
    - expect: The login form remains available and an authentication failure is communicated.

#### 1.6. Role dropdown exposes all available options

**File:** `tests/login-practice/role-dropdown.spec.ts`

**Steps:**
  1. Open the role dropdown.
    - expect: Student, Teacher, and Consultant are available options.
  2. Select Teacher, then Consultant.
    - expect: The selected option updates to the chosen value each time.
