import { QuestionDifficulty } from "../enums/question.enum";
import { IAnswerDTO, ISessionDTO } from "../types/session.type";
import { ArrayMaxSize, ArrayMinSize, IsArray, IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsString, IsUUID, Max, Min, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

const nbQuestions = parseInt(process.env['VITE_NB_QUESTIONS'] || '')

export class SaveResultsValidationSchema implements ISessionDTO {
    @IsNotEmpty()
    @IsUUID("4")
    sessionId!: string;
    
    @IsNotEmpty()
    @IsEnum(QuestionDifficulty)
    level!: QuestionDifficulty;
    
    @IsNotEmpty()
    @IsArray()
    @ArrayMinSize(nbQuestions)
    @ArrayMaxSize(nbQuestions)
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