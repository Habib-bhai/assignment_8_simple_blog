export const codeBlock = {
    name: 'codeBlock',
    title: 'Code Block',
    type: 'object',
    fields: [
      {
        name: 'code',
        title: 'Code',
        type: 'text',
      },
      {
        name: 'language',
        title: 'Programming Language',
        type: 'string',
        options: {
          list: [
            { title: 'JavaScript', value: 'javascript' },
            { title: 'HTML', value: 'html' },
            { title: 'CSS', value: 'css' },
            { title: 'Python', value: 'python' },
            { title: 'TypeScript', value: 'typescript' },
            { title: 'Java', value: 'java' },
            { title: 'PHP', value: 'php' }
          ]
        }
      },
      {
        name: 'filename',
        title: 'Filename (optional)',
        type: 'string'
      }
    ]
  }