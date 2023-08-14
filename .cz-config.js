module.exports = {
  // type 类型
  types: [
    { value: 'feat', name: '✨ 添加新功能' },
    { value: 'fix', name: '🐛 修复 bug' },
    { value: 'docs', name: '📝 仅文档的变更' },
    {
      value: 'refactor',
      name: '♻️ 重构代码。不包括 bug 修复、功能新增',
    },
    {
      value: 'style',
      name: '🎨 格式化代码，仅修改了空格/缩进/逗号/分号等，不改变代码逻辑，不改变样式',
    },

    { value: 'test', name: '✅ 添加、修改测试用例' },
    {
      value: 'build',
      name: '🔧 构建流程、外部依赖变更，比如升级 npm 包、修改 webpack 配置',
    },
    { value: 'sync', name: '🔀 功能同步' },
    { value: 'revert', name: '⏪ 回滚 commit' },
    { value: 'init', name: '🎉 初始化' },
    {
      value: 'perf',
      name: '⚡️ 性能优化',
    },
    { value: 'ci', name: '👷 修改了 CI 配置、脚本' },
    {
      value: 'chore',
      name: '🐳 对构建过程/辅助工具/库的更改，不影响源文件、测试用例的其他操作',
    },
  ],

  // scope 类型，针对 React 项目
  scopes: [
    ['pages', '页面相关'],
    ['models', '数据相关'],
    ['components', '组件相关'],
    ['hooks', 'hook 相关'],
    ['utils', 'utils 相关'],
    ['theme', '对主题配置的调整'],
    ['source', '静态资源相关'],
    ['css', '样式相关'],
    ['deps', '项目依赖'],
    ['other', '其他修改'],
    // 如果选择 custom ,后面会让你再输入一个自定义的 scope , 也可以不设置此项， 把后面的 allowCustomScopes 设置为 true
    ['custom', '以上都不是？我要自定义'],
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`,
    };
  }),

  // allowTicketNumber: false,
  // isTicketNumberRequired: false,
  // ticketNumberPrefix: 'TICKET-',
  // ticketNumberRegExp: '\\d{1,5}',

  // 可以设置 scope 的类型跟 type 的类型匹配项，例如: 'fix'
  /*
    scopeOverrides: {
      fix: [
        { name: 'merge' },
        { name: 'style' },
        { name: 'e2eTest' },
        { name: 'unitTest' }
      ]
    },
   */
  // 覆写提示的信息
  messages: {
    type: '请确保你的提交遵循了原子提交规范！\n选择你要提交的类型:',
    scope: '\n选择一个 scope (可选):',
    // 选择 scope: custom 时会出下面的提示
    customScope: '请输入自定义的 scope:',
    subject: '填写一个简短精炼的描述语句:\n',
    body: '添加一个更加详细的描述，可以附上新增功能的描述或 bug 链接、截图链接 (可选)。使用 "|" 换行:\n',
    breaking: '列举非兼容性重大的变更 (可选):\n',
    footer: '列举出所有变更的 ISSUES CLOSED  (可选)。 例如.: #31, #34:\n',
    confirmCommit: '确认提交?',
  },

  // 是否允许自定义填写 scope ，设置为 true ，会自动添加两个 scope 类型 [{ name: 'empty', value: false },{ name: 'custom', value: 'custom' }]
  // allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  // skip any questions you want
  // skipQuestions: [],

  // subject 限制长度
  subjectLimit: 20,
  // breaklineChar: '|', // 支持 body 和 footer
  // footerPrefix : 'ISSUES CLOSED:'
  // askForBreakingChangeFirst : true,
};
