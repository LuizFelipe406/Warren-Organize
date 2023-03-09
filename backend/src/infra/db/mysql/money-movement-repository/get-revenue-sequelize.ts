import sequelize, { Op } from "sequelize";
import { GetMoneyMovementRepository } from "../../../../data/protocols/money-movement/get-money-movement-repository";
import { MoneyMovementModel } from "../../../../domain/entity/money-movement";
import Revenue from "../models/Revenue";

export default class GetRevenuesSequelize implements GetMoneyMovementRepository {
  async get(id: string | number, month: number, year: number): Promise<MoneyMovementModel[] | []> {
    const revenues = await Revenue.findAll({
      where: {
        [Op.and]: [
          { userId: id },
          { date: sequelize.where(sequelize.fn("month", sequelize.col('date')), month) },
          { date: sequelize.where(sequelize.fn("year", sequelize.col('date')), year) }
        ]
      }
    });
    return revenues;
  }
  
}