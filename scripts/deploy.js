const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Déploiement sur GitHub Pages...');

try {
    // 1. Build du projet
    console.log('📦 Construction du projet...');
    execSync('npm run build', { stdio: 'inherit' });

    // 2. Vérifier si la branche gh-pages existe
    console.log('🔍 Vérification de la branche gh-pages...');
    try {
        execSync('git show-ref --verify --quiet refs/heads/gh-pages', { stdio: 'ignore' });
        console.log('✅ Branche gh-pages trouvée');
    } catch (error) {
        console.log('❌ Branche gh-pages non trouvée, création...');
        execSync('git checkout -b gh-pages', { stdio: 'inherit' });
    }

    // 3. Supprimer tous les fichiers de la branche gh-pages
    console.log('🧹 Nettoyage de la branche gh-pages...');
    execSync('git rm -rf .', { stdio: 'inherit' });

    // 4. Copier le contenu du dossier dist
    console.log('📋 Copie des fichiers de build...');
    execSync('git add dist/*', { stdio: 'inherit' });
    execSync('git mv dist/* .', { stdio: 'inherit' });
    execSync('git rm -rf dist', { stdio: 'inherit' });

    // 5. Commit et push
    console.log('💾 Commit des changements...');
    execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });
    execSync('git push origin gh-pages', { stdio: 'inherit' });

    // 6. Retour à la branche main
    console.log('🔄 Retour à la branche main...');
    execSync('git checkout main', { stdio: 'inherit' });

    console.log('✅ Déploiement terminé avec succès !');
    console.log('🌐 Votre site est disponible sur: https://zakaria-errahmaouy.github.io/portfolio/');

} catch (error) {
    console.error('❌ Erreur lors du déploiement:', error.message);
    process.exit(1);
}
