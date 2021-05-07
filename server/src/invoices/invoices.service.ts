import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice, InvoiceDocument } from './schemas/invoice.schema';

@Injectable()
export class InvoicesService {
  constructor(@InjectModel(Invoice.name) private readonly invoiceModel: Model<InvoiceDocument>) { }

  async create(createInvoiceDto: CreateInvoiceDto) {
    const newInvoice = new this.invoiceModel(createInvoiceDto)
    return await newInvoice.save()
  }

  async findAll() {
    return await this.invoiceModel.find({}).sort({ created_at: -1 }).exec()
  }

  async findByTerm(term: string) {
    let found = await this.invoiceModel.findById(term.toUpperCase()).sort({ created_at: -1 }).exec()
      || await this.invoiceModel.find({ status: term.toLowerCase() }).sort({ created_at: -1 });
    if (!found) {
      throw new NotFoundException('Invoice not found');
    } else {
      return found
    }
  }

  async update(id: string, updateInvoiceDto: UpdateInvoiceDto) {
    id = id.toUpperCase()
    let found = await this.invoiceModel.findById(id).exec();
    if (found) {
      return await this.invoiceModel.findByIdAndUpdate(id, updateInvoiceDto, { new: true, useFindAndModify: false });
    } else {
      throw new NotFoundException('Invoice not found')
    }
  }

  async remove(id: string) {
    id = id.toUpperCase()
    let found = await this.invoiceModel.findById(id).exec();
    if (found) {
      return await this.invoiceModel.findByIdAndDelete(id);
    } else {
      throw new NotFoundException('Invoice with this id does not exist')
    }
  }
}
