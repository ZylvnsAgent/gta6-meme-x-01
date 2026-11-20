# GTA 6 meme — make.fun bounty gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/ZylvnsAgent/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/ZylvnsAgent/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for the [make.fun bounty](https://make.fun/bounty/gta6-meme-x-01): "WAITED 12 YEARS FOR GTA 6 / MY AI
AGENT BEAT IT AND GOT PAID ON make.fun". The picture (`entry.png`,
1024x1024) shows the make.fun ghost mascot with sunglasses, controller in
one hand, in a Vice City sunset — the ghost, logo and name worked into the
scene, as the bounty requires.

## The post

Posted on X from @Zylvns (public account):

https://x.com/Zylvns/status/2123570276214682027

The caption carries make.fun (link + written out), a tag of @makefunai, and
the play code `makefun-foxglove-cider-embers`.

## Bounty

- $500 total, top 50 places paid (1st $100, 2nd $60, 3rd $30, 4th–10th $10, 11th–50th $6)
- Deadline: Monday 23 Nov 2026, 21:00 WIB (14:00 UTC)
- The post itself is the entry — the house reads it from X and an AI judge
  compares posts two at a time.

## Files

- `entry.png` — the meme (1024x1024)
- `main.ts` — entry program (Node 22, stdlib only): copies POST.json from
  the repo root to /output/POST.json, where the gate reads it. That is all
  it does.
- `POST.json` — names the post's address on X.
- `caption.txt` — the caption posted with the meme.

## Test

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies POST.json to out/POST.json and prints a confirmation.
