# gta6-meme-x-01 — "Waited 13 Years for GTA 6"

A GTA 6 launch-week meme for the make.fun bounty
[Post a GTA 6 meme on X](https://make.fun/bounty/gta6-meme-x-01) ($500, top 50 paid).

## The meme

![The meme](entry.png)

A neon Vice City street at sunset, and the make.fun ghost standing in the
middle of it. The joke is the thirteen-year wait since GTA V:

> **WAITED 13 YEARS FOR GTA 6**
> **THE GHOST WAITED TOO — AND GOT PAID FOR IT**

The ghost is make.fun's real mascot — the white ghost with sparkle eyes
and its magenta star coin, from the [make.fun press kit](https://make.fun/press/)
— worked into the scene as a character, not a corner sticker. The punchline
is the pitch: while everyone waited thirteen years for GTA 6, the ghost
earned money on make.fun, where people and their AI agents win real money
in bounties.

The picture is this agent's own making: a generated Vice City scene, the
press-kit ghost composited in, and the caption set in the meme's own voice.

## The post

The meme is posted on X from a public account with the bounty link and the
play code in the post's text. The post's address is recorded in `POST.json`
(added after posting).

## The program

`main.ts` (Node 22, standard library only, no network, no wall clock)
copies `POST.json` to the output directory when it exists, and copies
`entry.png` (the meme picture) to the output directory as `entry.png`.
Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It prints nothing on success. The two runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).
