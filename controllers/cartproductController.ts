import CartProduct from '../models/cartproduct';
import { Request, Response } from 'express';

export const createCartProduct = async (req: Request, res: Response) => {
    const cartProduct = new CartProduct(req.body);
    try {
        await cartProduct.save();
        res.status(201).send(cartProduct);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getCartProduct = async (req: Request, res: Response) => {
    try {
        const cartProduct = await CartProduct.findById(req.params.id).populate('product');
        if (!cartProduct) {
            return res.status(404).send();
        }
        res.send(cartProduct);
    } catch (error) {
        res.status(500).send();
    }
};

export const updateCartProduct = async (req: Request, res: Response) => {
    try {
        const cartProduct = await CartProduct.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!cartProduct) {
            return res.status(404).send();
        }
        res.send(cartProduct);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteCartProduct = async (req: Request, res: Response) => {
    try {
        const cartProduct = await CartProduct.findByIdAndDelete(req.params.id);
        if (!cartProduct) {
            return res.status(404).send();
        }
        res.send(cartProduct);
    } catch (error) {
        res.status(500).send();
    }
};