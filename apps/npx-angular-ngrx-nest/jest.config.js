module.exports = {
  name: 'npx-angular-ngrx-nest',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/npx-angular-ngrx-nest',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
