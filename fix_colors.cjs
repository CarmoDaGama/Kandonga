const fs = require('fs');

function fixFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace #fff with var(--text-primary)
    content = content.replace(/'#fff'/g, "'var(--text-primary)'");
    content = content.replace(/"#fff"/g, '"var(--text-primary)"');
    
    // Fix badge specifically
    content = content.replace(/color: 'var\(--text-primary\)', fontSize: '9px'/g, "color: '#fff', fontSize: '9px'");
    // Fix circular gauge text specifically 
    content = content.replace(/color: 'var\(--text-primary\)' \}\}&gt;842&lt;\/div&gt;/g, "color: 'var(--text-primary)' }}>842</div>"); // 842 should probably stay primary
    
    // In Dashboard.jsx, the stat-trend positive text color might need to be white if it's on a green background.
    // Let's check: <span className="stat-trend positive" style={{ color: '#fff' }}>+2.4% vs mês ant.</span>
    // actually, stat-trend doesn't have a background. Let's leave it as var(--text-primary) or green.
    // wait, stat-trend positive uses a background in the legacy? No, it's just text. So var(--text-primary) or brand-blue is fine.
    
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
    
    fs.writeFileSync(filePath, content);
}

fixFile('src/components/DetailsModal.jsx');
fixFile('src/components/Dashboard.jsx');

console.log("Colors fixed.");
