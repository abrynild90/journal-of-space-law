# Deploying Journal of Space Law to GitHub Pages

This guide will publish the website at a URL like:
`https://YOUR-USERNAME.github.io/journal-of-space-law/`

---

## Step 1: Create a GitHub Account (if needed)

Go to https://github.com and sign up for a free account.

---

## Step 2: Create a New Repository

1. Go to https://github.com/new
2. Set **Repository name** to: `journal-of-space-law`
3. Set visibility to **Public** (required for free GitHub Pages)
4. Do **NOT** check "Add a README" or any other initializers
5. Click **Create repository**

---

## Step 3: Push Files from Your Computer

Open Terminal and run these commands:

```bash
# Navigate to your project folder
cd /path/to/journal-of-space-law

# Stage all files
git add .

# Create first commit
git commit -m "Initial commit: Journal of Space Law website"

# Connect to GitHub (replace YOUR-USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/journal-of-space-law.git

# Push to GitHub
git push -u origin main
```

> **Note:** With 323MB of PDFs, the first push may take several minutes depending on your internet speed.

---

## Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (tab at the top)
3. Click **Pages** in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. The site will automatically deploy (takes ~2 minutes)

---

## Step 5: Access Your Live Site

Your site will be available at:
`https://YOUR-USERNAME.github.io/journal-of-space-law/`

GitHub will also show the URL in Settings → Pages after deployment.

---

## Updating the Site

Whenever you make changes, run:

```bash
git add .
git commit -m "Update: describe your changes"
git push
```

The site will automatically redeploy within ~2 minutes.

---

## Notes

- The `.nojekyll` file tells GitHub not to run Jekyll preprocessing, which is correct for this plain HTML site.
- The `.github/workflows/deploy.yml` file automates deployment on every push to `main`.
- All PDF links use relative paths and will work correctly on GitHub Pages.

---

## Alternative: Quick Test with Netlify Drop

For an even faster test (no account needed):

1. Go to https://app.netlify.com/drop
2. Drag the entire `journal-of-space-law` folder onto the page
3. Get an instant temporary URL

This is great for quick previews but the URL changes each time and isn't permanent.
