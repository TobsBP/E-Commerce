export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Detalhes do Produto</h1>
      <p>Você está vendo os detalhes do produto com ID: {params.id}</p>
    </div>
  );
}
