# Deploy to Fly.io (Free)

This guide walks you through deploying **EspañolMastery** to Fly.io for free.

## Prerequisites

1. **Create a free Fly.io account:** https://fly.io/app/sign-up
2. **Install Fly CLI:**
   - **macOS:** `brew install flyctl`
   - **Windows:** `choco install flyctl` or download from https://fly.io/docs/hands-on/install-flyctl/
   - **Linux:** `curl -L https://fly.io/install.sh | sh`

3. **Verify installation:**
   ```bash
   flyctl version
   ```

## Step 1: Authenticate with Fly.io

```bash
flyctl auth login
```

This opens a browser window. Sign in with your Fly.io account.

## Step 2: Deploy Your App

From the project root directory (where `fly.toml` exists):

```bash
flyctl deploy
```

This will:
- Build your Next.js app on Fly.io's servers (plenty of memory—no OOM!)
- Deploy to a free shared-cpu VM with 1GB RAM
- Give you a live URL: `https://espanol-mastery.fly.dev`

**Deployment takes ~3-5 minutes the first time.**

## Step 3: Verify Deployment

After deployment completes:
```bash
flyctl open
```

Opens your app in the browser. You should see the homepage loading.

## Monitoring & Logs

```bash
# View logs
flyctl logs

# Check deployment status
flyctl status

# Scale or restart if needed
flyctl restart
```

## Environment Variables

If you need to add Supabase credentials or other secrets:

```bash
flyctl secrets set SUPABASE_URL="your-url"
flyctl secrets set SUPABASE_ANON_KEY="your-key"
```

Check your `.env` file for the actual values.

## Free Tier Limits

- **Compute:** 3 shared-cpu VMs × 3GB RAM each
- **Storage:** 3GB total
- **Bandwidth:** 160GB/month
- **Cost:** $0 (included in free tier)

Your app uses **1 shared-cpu VM + 1GB RAM**, well within limits.

## Troubleshooting

**Deployment fails with memory error?**
- Fly.io allocates memory dynamically. Redeploy: `flyctl deploy --force-nomachine`

**App crashes after deploy?**
- Check logs: `flyctl logs`
- Verify environment variables are set: `flyctl secrets list`

**Want to redeploy after code changes?**
```bash
git push  # push to GitHub
flyctl deploy
```

---

**Done!** Your app is now live on Fly.io, Supabase lessons are fetched dynamically, and there's no OOM issue. 🎉