// const _ = require('lodash')
const CONF = {
  'editor.tabCompletion': 'on',
  'editor.tabSize': 2,
  'editor.fontFamily': "'Fira Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
  'editor.fontLigatures': true,
  'editor.fontSize': 16,
  'editor.fontWeight': '400',
  'editor.formatOnSave': false,
  'editor.lineHeight': 24,
  'editor.suggestLineHeight': 20,
  'editor.letterSpacing': 0.3,
  'editor.minimap.enabled': false,
  'editor.renderWhitespace': 'boundary',
  'editor.snippetSuggestions': 'top',
  'editor.suggestSelection': 'first',
  'editor.wordWrap': 'off',
  'editor.cursorStyle': 'line',
  'editor.cursorWidth': 3,
  'editor.cursorBlinking': 'smooth',
  'editor.tokenColorCustomizations': {
    '[Material Theme Darker]': {
      comments: '#708080'
    }
  },
  'emmet.includeLanguages': {
    'vue-html': 'html',
    vue: 'html',
    javascript: 'javascriptreact',
    'html.erb': 'html'
  },
  'emmet.preferences': {
    'lorem.omitCommonPart': true,
    'lorem.defaultLang': 'sp',
    'lorem.skipCommon': true
  },
  'emmet.showExpandedAbbreviation': 'inMarkupAndStylesheetFilesOnly',
  'emmet.showSuggestionsAsSnippets': true,
  'emmet.triggerExpansionOnTab': true,
  'files.autoSave': 'off',
  'files.eol': '\n',
  'files.exclude': {
    node_modules: true
  },
  'files.insertFinalNewline': true,
  'files.trimTrailingWhitespace': true,
  'javascript.preferences.quoteStyle': 'single',
  'javascript.format.semicolons': 'remove',
  'javascript.format.insertSpaceAfterConstructor': true,
  'javascript.format.insertSpaceBeforeFunctionParenthesis': true,
  'javascript.format.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces': true,
  'javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets': true,
  'javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis': true,
  'javascript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces': true,
  'npm.packageManager': 'yarn',
  'telemetry.enableCrashReporter': false,
  'telemetry.enableTelemetry': false,
  'update.showReleaseNotes': false,
  'window.menuBarVisibility': 'compact',
  'window.zoomLevel': -1,
  'workbench.colorCustomizations': {
    'statusBar.background': '#1D3F70',
    'statusBar.background': '#101138',
    'statusBar.background': '#000f21',
    'statusBar.foreground': '#9DA3A4',
    'tab.activeBackground': '#161a23',
    'tab.activeForeground': '#91a6ba',
    'tab.activeBorderTop': '#c0392bZZZ',
    'tab.inactiveBackground': '#1d212dZZZ',
    'tab.inactiveForeground': '#424B5C',
    '[Cobalt2]': {
      'tab.activeBackground': '#077bf73e',
      'tab.activeBackground': '#15498CZZZ',
      'tab.activeForeground': '#dadfe1ZZZ',
      'tab.activeBorderTop': '#e73c4eZZZ',
      'tab.activeBorder': '#4D72A1',
      'tab.activeBorder': '#49718FZZZ',
      'tab.inactiveBackground': '#0b2334ZZZ'
    },
    '[Material Theme Darker]': {
      'sideBar.foreground': '#95a5a6',
      'sideBar.background': '#1D1D1D',
      'editor.foreground': '#ecf0f1',
      'editor.background': '#191919'
    }
  },
  'workbench.settings.editor': 'json',
  'workbench.startupEditor': 'none',
  'workbench.settings.useSplitJSON': true,
  'workbench.colorTheme': 'Material Theme Darker',
  //
  // prettier
  'prettier.endOfLine': 'lf',
  'prettier.packageManager': 'yarn',
  'prettier.printWidth': 320,
  'prettier.semi': false,
  'prettier.singleQuote': true,
  'editor.defaultFormatter': 'esbenp.prettier-vscode',
  '[javascript]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
    'editor.formatOnSave': true
  },
  //
  // eslint
  'eslint.packageManager': 'yarn',
  'eslint.validate': ['javascript', 'javascriptreact', 'vue'],
  //
  // bracketPairColorizer
  'bracketPairColorizer.forceUniqueOpeningColor': true,
  'bracketPairColorizer.activeScopeCSS': ['borderStyle : solid', 'borderWidth : 1px', 'borderColor : {color}; opacity: 0.5'],
  'bracketPairColorizer.consecutivePairColors': ['()', '[]', '{}', ['Gold', 'Orchid', 'LightSkyBlue', 'lawnGreen'], 'Red'],
  'git.path': '/usr/bin/git',
  'terminal.integrated.copyOnSelection': true,
  'terminal.integrated.cursorBlinking': true,
  'terminal.integrated.cursorStyle': 'line',
  'editor.codeActionsOnSave': {
    'source.fixAll.eslint': true
  },
  'vetur.format.defaultFormatterOptions': {
    prettyhtml: {
      printWidth: 320,
      singleQuote: false,
      wrapAttributes: false,
      sortAttributes: true
    },
    prettier: {
      semi: false,
      singleQuote: true
    }
  },
  'workbench.tree.indent': 20,
  'explorer.compactFolders': false,
  'window.titleBarStyle': 'custom',
  'shellformat.path': '/usr/local/bin/shfmt',
  '[shellscript]': {
    'files.eol': '\n',
    'editor.defaultFormatter': 'foxundermoon.shell-format'
  },
  'liveServer.settings.donotShowInfoMsg': true,
  'rest-client.enableTelemetry': false,
  'extensions.ignoreRecommendations': true,
  'editor.renameOnType': true,
  'liveSassCompile.settings.generateMap': false,
  'liveSassCompile.settings.formats': [
    {
      format: 'compact',
      extensionName: '.css',
      savePath: '/css'
    }
  ],
  'editor.multiCursorModifier': 'ctrlCmd',
  'eslint.nodePath': '/usr/local/bin/eslint',
  'eslint.options': {
    configFile: '/root/.eslintrc.js'
  },
  'prettier.configPath': '/root/.prettierrc',
  'workbench.iconTheme': 'material-icon-theme',
  'explorer.decorations.badges': false,
  'tailwindCSS.emmetCompletions': true,
  'tailwindCSS.includeLanguages': {
    plaintext: 'html'
  }
}
const NEW_CONF = {
  '[javascript]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
    'editor.formatOnSave': true
  },
  '[shellscript]': {
    'files.eol': '\n',
    'editor.defaultFormatter': 'foxundermoon.shell-format'
  },
  'bracketPairColorizer.activeScopeCSS': ['borderStyle : solid', 'borderWidth : 1px', 'borderColor : {color}; opacity: 0.5'],
  'bracketPairColorizer.consecutivePairColors': ['()', '[]', '{}', ['Gold', 'Orchid', 'LightSkyBlue', 'lawnGreen'], 'Red'],
  'bracketPairColorizer.forceUniqueOpeningColor': true,
  'editor.codeActionsOnSave': {
    'source.fixAll.eslint': true
  },
  'editor.cursorBlinking': 'smooth',
  'editor.cursorStyle': 'line',
  'editor.cursorWidth': 3,
  'editor.defaultFormatter': 'esbenp.prettier-vscode',
  'editor.fontFamily': "'Fira Code', 'Roboto Mono', Consolas, 'Courier New', monospace",
  'editor.fontLigatures': true,
  'editor.fontSize': 16,
  'editor.fontWeight': '400',
  'editor.formatOnSave': false,
  'editor.letterSpacing': 0.3,
  'editor.lineHeight': 24,
  'editor.minimap.enabled': false,
  'editor.multiCursorModifier': 'ctrlCmd',
  'editor.renameOnType': true,
  'editor.renderWhitespace': 'boundary',
  'editor.snippetSuggestions': 'top',
  'editor.suggestLineHeight': 20,
  'editor.suggestSelection': 'first',
  'editor.tabCompletion': 'on',
  'editor.tabSize': 2,
  'editor.tokenColorCustomizations': {
    '[Material Theme Darker]': {
      comments: '#708080'
    }
  },
  'editor.wordWrap': 'off',
  'emmet.includeLanguages': {
    'vue-html': 'html',
    vue: 'html',
    javascript: 'javascriptreact',
    'html.erb': 'html'
  },
  'emmet.preferences': {
    'lorem.omitCommonPart': true,
    'lorem.defaultLang': 'sp',
    'lorem.skipCommon': true
  },
  'emmet.showExpandedAbbreviation': 'inMarkupAndStylesheetFilesOnly',
  'emmet.showSuggestionsAsSnippets': true,
  'emmet.triggerExpansionOnTab': true,
  'eslint.nodePath': '/usr/local/bin/eslint',
  'eslint.options': {
    configFile: '/root/.eslintrc.js'
  },
  'eslint.packageManager': 'yarn',
  'eslint.validate': ['javascript', 'javascriptreact', 'vue'],
  'explorer.compactFolders': false,
  'explorer.decorations.badges': false,
  'extensions.ignoreRecommendations': true,
  'files.autoSave': 'off',
  'files.eol': '\n',
  'files.exclude': {
    node_modules: true
  },
  'files.insertFinalNewline': true,
  'files.trimTrailingWhitespace': true,
  'git.path': '/usr/bin/git',
  'javascript.format.insertSpaceAfterConstructor': true,
  'javascript.format.insertSpaceAfterOpeningAndBeforeClosingJsxExpressionBraces': true,
  'javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets': true,
  'javascript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis': true,
  'javascript.format.insertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces': true,
  'javascript.format.insertSpaceBeforeFunctionParenthesis': true,
  'javascript.format.semicolons': 'remove',
  'javascript.preferences.quoteStyle': 'single',
  'liveSassCompile.settings.formats': [
    {
      format: 'compact',
      extensionName: '.css',
      savePath: '/css'
    }
  ],
  'liveSassCompile.settings.generateMap': false,
  'liveServer.settings.donotShowInfoMsg': true,
  'npm.packageManager': 'yarn',
  'prettier.configPath': '/root/.prettierrc',
  'prettier.endOfLine': 'lf',
  'prettier.packageManager': 'yarn',
  'prettier.printWidth': 320,
  'prettier.semi': false,
  'prettier.singleQuote': true,
  'rest-client.enableTelemetry': false,
  'shellformat.path': '/usr/local/bin/shfmt',
  'tailwindCSS.emmetCompletions': true,
  'tailwindCSS.includeLanguages': {
    plaintext: 'html'
  },
  'telemetry.enableCrashReporter': false,
  'telemetry.enableTelemetry': false,
  'terminal.integrated.copyOnSelection': true,
  'terminal.integrated.cursorBlinking': true,
  'terminal.integrated.cursorStyle': 'line',
  'update.showReleaseNotes': false,
  'vetur.format.defaultFormatterOptions': {
    prettyhtml: {
      printWidth: 320,
      singleQuote: false,
      wrapAttributes: false,
      sortAttributes: true
    },
    prettier: {
      semi: false,
      singleQuote: true
    }
  },
  'window.menuBarVisibility': 'compact',
  'window.titleBarStyle': 'custom',
  'window.zoomLevel': -1,
  'workbench.colorCustomizations': {
    // "statusBar.background": "#000f21",
    // "statusBar.foreground": "#9DA3A4",
    // "tab.activeBackground": "#161a23",
    // "tab.activeForeground": "#91a6ba",
    'tab.activeBorderTop': '#c0392b',
    'tab.inactiveBackground': '#1d212d',
    // "tab.inactiveForeground": "#424B5C",
    '[Cobalt2]': {
      'tab.activeBackground': '#15498C',
      'tab.activeForeground': '#dadfe1',
      'tab.activeBorderTop': '#e73c4e',
      'tab.activeBorder': '#49718F',
      'tab.inactiveBackground': '#0b2334'
    },
    '[Material Theme Darker]': {
      'sideBar.foreground': '#95a5a6',
      'sideBar.background': '#1D1D1D',
      'editor.foreground': '#ecf0f1',
      'editor.background': '#191919'
    }
  },
  'workbench.colorTheme': 'Material Theme Darker',
  'workbench.iconTheme': 'material-icon-theme',
  'workbench.settings.editor': 'json',
  'workbench.settings.useSplitJSON': true,
  'workbench.startupEditor': 'none',
  'workbench.tree.indent': 20
}

// const sortObject = obj => Object.keys(obj).sort().reduce((res, key) => (res[key] = obj[key], res), {});

function sortObj(obj) {
  return Object.keys(obj)
    .sort()
    .reduce(function(result, key) {
      result[key] = obj[key]
      return result
    }, {})
}

console.log(sortObj(CONF))
