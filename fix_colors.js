const fs = require('fs');

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace #fff with var(--text-primary)
    // Be careful with the PENDENTE badge which might use #fff with a green background.
    // Looking at DetailsModal.jsx, the badge is: <span className="badge" style={{ background: 'var(--brand-blue)', color: '#fff', fontSize: '9px', padding: '2px 6px' }}>PENDENTE</span>
    // So we can do a global replace, then put #fff back for that specific line or similar.
    // Actually, I'll just use regex that doesn't match if background is brand-blue.
    
    // A simpler way: replace all '#fff', then fix specific ones.
    content = content.replace(/'#fff'/g, "'var(--text-primary)'");
    content = content.replace(/"#fff"/g, '"var(--text-primary)"');
    
    // Fix badge specifically (it might have been changed to var(--text-primary)
    content = content.replace(/color: 'var\(--text-primary\)', fontSize: '9px'/g, "color: '#fff', fontSize: '9px'");
    
    // Replace dark mode specific rgbas and borders
    content = content.replace(/rgba\(255,255,255,0.05\)/g, "var(--bg-body)");
    content = content.replace(/rgba\(255,255,255,0.1\)/g, "var(--border)");
    content = content.replace(/rgba\(255,255,255,0.02\)/g, "var(--bg-body)");
    content = content.replace(/rgba\(255,255,255,0.2\)/g, "var(--border)");
    
    // Replace old blue (#7899d4) with brand-blue
    content = content.replace(/#7899d4/g, "var(--brand-blue)");
    
    // Replace specific background for profit
    content = content.replace(/rgba\(120,153,212,0.05\)/g, "rgba(7, 212, 3, 0.05)");
    content = content.replace(/rgba\(120,153,212,0.3\)/g, "rgba(7, 212, 3, 0.2)");
    
    // Replace specific background for icon
    content = content.replace(/background: 'var\(--bg-body\)', border: '1px solid var\(--border\)', borderRadius: '12px'/g, "background: 'var(--bg-body)', border: '1px solid var(--border)', borderRadius: '12px'");
    
    fs.writeFileSync(filePath, content);
}

fixFile('src/components/DetailsModal.jsx');
fixFile('src/components/Dashboard.jsx');

console.log("Colors fixed.");
