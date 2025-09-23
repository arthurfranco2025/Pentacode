export function formatarPreco(preco: string | number) {
    const precoNum =
        typeof preco === "string"
            ? parseFloat(preco.replace(",", ".").trim())
            : preco;

    if (isNaN(precoNum)) return "R$ 0,00";

    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(precoNum);
}