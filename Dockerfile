FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV DATABASE_URL="mysql://root:@amati_db:3306/amati"
RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "dev"]