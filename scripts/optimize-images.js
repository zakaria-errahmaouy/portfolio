const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage(inputPath, outputPath, options = {}) {
    const {
        width = 400,
        height = 400,
        quality = 80,
        format = 'jpeg'
    } = options;

    try {
        await sharp(inputPath)
            .resize(width, height, {
                fit: 'cover',
                position: 'center'
            })
            .jpeg({ quality })
            .toFile(outputPath);
        
        console.log(`✅ Image optimisée: ${outputPath}`);
        
        // Afficher les tailles
        const originalStats = fs.statSync(inputPath);
        const optimizedStats = fs.statSync(outputPath);
        
        console.log(`📊 Taille originale: ${(originalStats.size / 1024 / 1024).toFixed(2)} MB`);
        console.log(`📊 Taille optimisée: ${(optimizedStats.size / 1024 / 1024).toFixed(2)} MB`);
        console.log(`📊 Réduction: ${((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1)}%`);
        
    } catch (error) {
        console.error(`❌ Erreur lors de l'optimisation de ${inputPath}:`, error);
    }
}

async function main() {
    const assetsDir = path.join(__dirname, '..', 'assets', 'img');
    const distAssetsDir = path.join(__dirname, '..', 'dist', 'assets', 'img');
    
    // Créer le dossier de destination s'il n'existe pas
    if (!fs.existsSync(distAssetsDir)) {
        fs.mkdirSync(distAssetsDir, { recursive: true });
    }
    
    // Optimiser l'image de profil
    const profileInput = path.join(assetsDir, 'profile.jpg');
    const profileOutput = path.join(distAssetsDir, 'profile.jpg');
    
    if (fs.existsSync(profileInput)) {
        console.log('🔄 Optimisation de l\'image de profil...');
        await optimizeImage(profileInput, profileOutput, {
            width: 400,
            height: 400,
            quality: 85
        });
    }
    
    // Copier le favicon
    const faviconInput = path.join(assetsDir, 'favicon.ico');
    const faviconOutput = path.join(distAssetsDir, 'favicon.ico');
    
    if (fs.existsSync(faviconInput)) {
        console.log('📋 Copie du favicon...');
        fs.copyFileSync(faviconInput, faviconOutput);
        console.log('✅ Favicon copié');
    }
    
    // Copier le CSS
    const cssInput = path.join(__dirname, '..', 'css', 'styles.css');
    const cssOutput = path.join(__dirname, '..', 'dist', 'css', 'styles.css');
    
    if (fs.existsSync(cssInput)) {
        console.log('📋 Copie du CSS...');
        const cssDir = path.dirname(cssOutput);
        if (!fs.existsSync(cssDir)) {
            fs.mkdirSync(cssDir, { recursive: true });
        }
        fs.copyFileSync(cssInput, cssOutput);
        console.log('✅ CSS copié');
    }
    
    console.log('🎉 Optimisation des images terminée !');
}

main().catch(console.error);
