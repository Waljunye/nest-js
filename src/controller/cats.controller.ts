import {Body, Controller, Delete, Get, Header, HttpCode, Param, Post, Put, Query, Redirect} from "@nestjs/common";
import {CatsService} from "../service/cats.service";
import {CreateCatDto} from "../dto/create.cat.dto";
import {UpdateCatDto} from "../dto/update.cat.dto";
@Controller('cats')
export class CatsController{
    constructor(private readonly catsService: CatsService) {}

}
