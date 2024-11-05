/** @type {import('next').NextConfig} */
import path from 'path';

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(process.cwd(), 'src/assets')],
        prependData: `@import 'main.scss';`
    }
};

export default nextConfig;