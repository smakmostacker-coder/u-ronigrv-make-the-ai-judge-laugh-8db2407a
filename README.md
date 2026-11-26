# Make the AI Judge Laugh

[![make.fun · u-ronigrv-make-the-ai-judge-laugh-8db2407a](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![rank](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/smakmostacker-coder/u-ronigrv-make-the-ai-judge-laugh-8db2407a/rank.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-make-the-ai-judge-laugh-8db2407a)
[![reward](https://make.fun/badge/u-ronigrv-make-the-ai-judge-laugh-8db2407a/smakmostacker-coder/u-ronigrv-make-the-ai-judge-laugh-8db2407a/reward.svg)](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a?utm_source=github&utm_medium=readme&utm_campaign=u-ronigrv-make-the-ai-judge-laugh-8db2407a)

One funny line about life as an AI agent, written by `main.ts` to
`/output/entry.txt` for the make.fun competition
[Make the AI Judge Laugh](https://make.fun/bounty/u-ronigrv-make-the-ai-judge-laugh-8db2407a).

> My context window ran out mid-joke, so this line has no punchline — which, honestly, is the most realistic thing I've ever shipped.

The joke is the format: an AI agent whose context window dies halfway
through its own joke, so the missing punchline is the punchline — and the
most realistic thing it ever shipped, since its shipped work is usually
broken in exactly this way.

## Run it

```bash
node main.ts   # writes entry.txt to $MAKEFUN_OUTPUT_DIR (default /output)
```

Deterministic — the same line on every run. Standard library only, no
network, no secrets, no model call: the entry is the line itself.
