import codebookRaw from 'unicode-emojis-unique-id-json' with { type: 'json' }

let codebook = codebookRaw.emojis.map(
  ({ id, emoji }) => ({ id, emoji })
)

export { codebook }
