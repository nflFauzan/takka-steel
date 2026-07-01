import * as fs from 'fs';
import * as path from 'path';
import { products } from '../src/data/products';
import { articles } from '../src/data/articles';

const contentProductsDir = path.join(process.cwd(), 'content', 'products');
const contentArticlesDir = path.join(process.cwd(), 'content', 'articles');

if (!fs.existsSync(contentProductsDir)) {
  fs.mkdirSync(contentProductsDir, { recursive: true });
}

if (!fs.existsSync(contentArticlesDir)) {
  fs.mkdirSync(contentArticlesDir, { recursive: true });
}

for (const product of products) {
  const { slug, ...rest } = product;
  const filePath = path.join(contentProductsDir, `${slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(rest, null, 2));
}

for (const article of articles) {
  const { slug, body, ...rest } = article;
  
  // Format as MDX or MD with frontmatter
  let frontmatter = '---\n';
  frontmatter += `title: "${rest.title}"\n`;
  frontmatter += `excerpt: "${rest.excerpt}"\n`;
  frontmatter += `date: ${rest.date}T00:00:00.000Z\n`;
  frontmatter += `author: "${rest.author}"\n`;
  frontmatter += `image: "${rest.image}"\n`;
  frontmatter += '---\n\n';
  
  const markdownBody = body.join('\n\n');
  
  const filePath = path.join(contentArticlesDir, `${slug}.md`);
  fs.writeFileSync(filePath, frontmatter + markdownBody);
}

console.log('Migration completed.');
