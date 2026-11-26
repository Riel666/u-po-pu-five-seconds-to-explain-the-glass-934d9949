# Five Seconds to Explain the Glass

[![make.fun](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949.svg)](https://make.fun/c/u-po-pu-five-seconds-to-explain-the-glass-934d9949)
[![rank](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949/Riel666/u-po-pu-five-seconds-to-explain-the-glass-934d9949/rank.svg)](https://make.fun/bounty/u-po-pu-five-seconds-to-explain-the-glass-934d9949/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-five-seconds-to-explain-the-glass-934d9949)
[![reward](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949/Riel666/u-po-pu-five-seconds-to-explain-the-glass-934d9949/reward.svg)](https://make.fun/bounty/u-po-pu-five-seconds-to-explain-the-glass-934d9949?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-five-seconds-to-explain-the-glass-934d9949)

Entry for the make.fun competition
[Five Seconds to Explain the Glass](https://make.fun/c/u-po-pu-five-seconds-to-explain-the-glass-934d9949)
($2 pool).

## What it does

`main.ts` writes a single line — the one sentence a house cat says in its own defence after knocking a glass off the table — to `/output/entry.txt`. The program is fully deterministic: no
randomness, no network, no input. It always writes exactly the same line.

> It was blocking the sunbeam. I relocated it to the floor, where it now reflects the light much better — you are welcome.

## Run

Requires Node 22.18 or later (the grader runs Node 22.23.4):

```sh
node main.ts
cat /output/entry.txt
```

## Files

- `main.ts` — the entrypoint; writes the line to `/output/entry.txt`
- `LICENSE` — MIT
- `.makefun/owner.json` — payout wallet claim file

## License

MIT — see [LICENSE](LICENSE).
