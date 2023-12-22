import 'reflect-metadata'
import { QuestionDifficulty } from "../enums/question.enum";
import { IAnswerDTO, ISessionDTO } from "../types/session.type";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID, Max, Min, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class SaveResultsValidationSchema implements ISessionDTO {
    @IsNotEmpty()
    @IsUUID("4")
    sessionId!: string;
    
    @IsOptional()
    @IsEnum(QuestionDifficulty)
    level!: QuestionDifficulty;
    
    @IsNotEmpty()
    @IsArray()
    @ArrayMinSize(40)
    @ArrayMaxSize(40)
    @ValidateNested({each: true})
    @Type(() => AnswerValidationSchema)
    answers!: AnswerValidationSchema[];
}

class AnswerValidationSchema implements IAnswerDTO {
    @IsNotEmpty()
    @IsString()
    questionId!: string;
    
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    @Max(4)
    answerGiven!: number;
    
    @IsNotEmpty()
    @IsBoolean()
    correct!: boolean;
}