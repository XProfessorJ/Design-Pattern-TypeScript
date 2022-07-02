export class Tea {
    private static tea: Tea;
    public static getInstance(): Tea {
        return this.tea ? Tea.tea : new Tea();
    }
}