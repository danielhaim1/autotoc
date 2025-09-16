import { Generate } from './src/index.js';

const AutoToc = { Generate };

// Export for ESM environment
export default AutoToc;

// Export for Node.js environment
if (typeof module === 'object' && module.exports) {
    module.exports = AutoToc;
}

// Export for AMD environment
if (typeof define === 'function' && define.amd) {
    define('AutoToc', [], function() {
        return AutoToc;
    });
}

// Export for web environment
if (typeof window === 'object') {
    window.AutoToc = AutoToc;
}
