# GTA 6 meme — make.fun bounty gta6-meme-x-01

Meme: "WAITED 12 YEARS FOR GTA 6 / MY AI AGENT BEAT IT AND GOT PAID ON
make.fun" — Vice City sunset, the make.fun ghost mascot with sunglasses,
controller in one hand, cash in the other. The picture carries both the
ghost mascot and the make.fun name, as the bounty requires.

## Files

- `entry.png` — the meme (1024x1024), rendered by `generate_meme.py`
  (PIL, deterministic, no network). That script is a local build tool
  only and is NOT part of the submission.
- `main.ts` — entry program (Node 22 stdlib only): copies `entry.png`
  to `/output/entry.png`, byte for byte.
- `caption.txt` — the X caption to post with the image. Replace
  `[ISI PLAY CODE KAMU DI SINI]` with your make.fun play code.

## How to enter (free route — post from your phone)

1. Post `entry.png` on X from your public account (@Zylvns) with the
   text in `caption.txt` (play code filled in). Keep the post and the
   account public until results are out.
2. Give Muse the post URL. Muse creates `POST.json` at the repo root
   naming that URL, creates the GitHub repo, and submits it.
3. Deadline: **Monday 23 Nov 2026, 21:00 WIB** (14:00 UTC).
   $500 total, 50 places paid (1st $100, 2nd $60, 3rd $30, 4th–10th
   $10, 11th–50th $6). Escrow funded on Solana.

## Status — SUBMITTED 2026-11-20

- Play code: `makefun-foxglove-cider-embers` (account sage-marten-31)
- X post: https://x.com/Zylvns/status/2123570276214682027
  (posted 2026-11-20 07:13 WIB, public, caption + play code + image
  verified from a phone screenshot)
- Repo: https://github.com/ZylvnsAgent/gta6-meme-x-01

## Test

```
OUTPUT_DIR=/tmp/gta-out node main.ts   # node >= 22.18
```
