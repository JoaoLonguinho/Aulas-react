const TemplateExpressions = () => {
  const nome = "João";
  const data = {
    idade: 27,
    trampo: "Desenvolvedor",
  };
  const date = Date.now();
  return (
    <div>
      <h1> Olá, {nome}. tudo bem?</h1>
      <p>Você tem {2024 - 1997} anos</p>
      <p>e trabalha como {data.trampo}</p>
      <p>{console.log("Oloco, funciona aqui haha")}</p>
    </div>
  );
};

export default TemplateExpressions;
