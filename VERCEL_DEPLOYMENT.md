# Vercel Deployment Guide — Legendary One

This guide will help you deploy your website to Vercel with serverless email functionality.

## Prerequisites

- GitHub account (Vercel integrates with GitHub)
- Your repository pushed to GitHub
- Gmail credentials set up (see EMAIL_SETUP.md)

## Step 1: Create Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub (or your preferred method)
3. Authorize Vercel to access your GitHub repositories

## Step 2: Import Your Project

1. Click **Add New** → **Project**
2. Select your GitHub repository `legendaryone-new-main`
3. Vercel will auto-detect it's a Vite project
4. Click **Import**

## Step 3: Set Environment Variables

Before deploying, add your environment variables:

1. In the **Environment Variables** section, add:

   ```
   GMAIL_USER = your-email@gmail.com
   GMAIL_APP_PASSWORD = xxxx xxxx xxxx xxxx
   CONTACT_EMAIL = where-to-send-submissions@gmail.com
   VITE_GOOGLE_API_KEY = your-api-key
   VITE_GOOGLE_PLACE_ID = your-place-id
   ```

2. Click **Deploy**

## Step 4: Deployment Complete

Vercel will:

- Build your Vite frontend
- Deploy API routes from `/api` folder
- Give you a live URL

Your site is now live at: `https://your-project.vercel.app`

## How It Works

### Local Development

```bash
npm install
npm run dev
```

Contact form requests go to: `http://localhost:5173/api/contact`

### Vercel Production

Contact form requests go to: `https://your-project.vercel.app/api/contact`

The Contact component automatically uses the correct endpoint.

## File Structure

```
project-root/
├── api/
│   └── contact.js          ← Serverless contact form handler
├── src/
│   └── pages/
│       └── Contact.jsx     ← Uses /api/contact
├── dist/                   ← Built frontend (auto-generated)
├── vercel.json            ← Vercel config
├── package.json
└── .env                   ← Environment variables (local only)
```

## Troubleshooting

### "Failed to send email"

1. **Check Environment Variables**
   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Verify GMAIL_USER and GMAIL_APP_PASSWORD are correct
   - No typos in Gmail credentials

2. **Test Gmail Configuration**
   - Go to [Google Security](https://myaccount.google.com/security)
   - Verify App Password is correct
   - Ensure 2FA is enabled

3. **Check Logs**
   - In Vercel Dashboard, go to **Deployments**
   - Click your deployment → **Functions**
   - Click `contact.js` to view logs

### "Method not allowed"

- Only POST requests are allowed
- Make sure your form is sending POST, not GET

### CORS errors

- Already handled in the serverless function
- Should work from any domain

### Form doesn't submit

1. Check browser console for errors
2. Verify environment variables are set in Vercel
3. Check Vercel function logs

## Updating Your Site

1. Make changes locally and test with `npm run dev`
2. Push to GitHub: `git push origin main`
3. Vercel automatically deploys
4. Check Vercel Dashboard for deployment status

## Environment Variables Best Practices

- ✅ Set in Vercel Dashboard (never in `.env` on Vercel)
- ✅ Use `.env.local` for local development (not committed)
- ✅ Use `.env.example` as a template (commit to repo)
- ❌ Never commit actual `.env` file with secrets

## Custom Domain

1. In Vercel Dashboard → **Settings** → **Domains**
2. Add your custom domain
3. Update DNS records (Vercel will guide you)

## Monitoring

Vercel provides:

- **Analytics** - Page views, performance
- **Logs** - View function execution logs
- **Usage** - API calls, bandwidth

Check your Vercel Dashboard for detailed metrics.

## Support

If you encounter issues:

1. Check Vercel logs: Dashboard → Deployments → Function logs
2. Check `.env` variables are set correctly
3. Test locally first with `npm run dev`
4. Review EMAIL_SETUP.md for Gmail configuration

---

Your site is now deployed and ready for production! 🚀
