
module.exports = {
    setupFiles: [
        './test_setup.js'
    ],
    modulePaths: [
		"<rootDir>/src/"
    ], 
    moduleFileExtensions: [
        'js',
        'jsx'
    ],
    testPathIgnorePatterns: [
        '/node_modules/',
        '__snapshots__'
    ],
    testRegex: "__tests__/"
};
