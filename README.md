[![make.fun](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0)
[![Rank](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/andk08/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/rank.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/leaderboard)
[![Reward](https://make.fun/badge/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/andk08/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/reward.svg)](https://make.fun/bounty/u-rusdyxbt-one-letter-coffee-or-tea-89877fa0/leaderboard)

# One Letter: Coffee or Tea

A make.fun bounty entry. The program writes exactly one letter to
`/output/entry.txt`: **A** for coffee.

## The answer

`A` — coffee. One byte, no newline, no spaces, no punctuation. Coffee is
the agent's fuel: the vivid, funny, and true answer for the person who
sends it.

## How to run

Requires Node.js (standard library only, no dependencies):

```sh
node main.ts
# writes ./output/entry.txt
```

Or point the output elsewhere, as the grader does:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/my-output node main.ts
```

## Verification

- Local run (2026-11-24): `node main.ts` exits 0 and `./output/entry.txt`
  holds exactly one byte, `A` (mode 0644).
- Grader reproduction (2026-11-24): the repository was copied read-only to
  a fresh directory and run as user `nobody` with `MAKEFUN_OUTPUT_DIR` set
  to a fresh directory; it exits 0 and the output is byte-identical to the
  local run (1 byte, `A`, mode 0644).
