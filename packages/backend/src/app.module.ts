import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module';

const dbconf = TypeOrmModule.forRoot({
  type: 'postgres',
  host: '****',
  port: 5432,
  username: '****',
  password: '*****',
  database: '*****',
  entities: [''],
  synchronize: true,
});

@Module({
  imports: [dbconf, PokemonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
