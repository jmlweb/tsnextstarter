module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) =>
    `next lint --fix --file ${filenames
      .map((file) => file.split(process.cwd()[1]))
      .join(' --file ')}`,
  '*': 'prettier --ignore-unknown --config .prettierrc --write',
};
