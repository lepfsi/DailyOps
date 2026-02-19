interface CategoryCardProps {
  title: string;
  description: string;
  color: 'blue' | 'green' | 'purple' | 'orange';
}

export default function CategoryCard({ title, description, color }: CategoryCardProps) {
  const colorClasses = {
    blue: 'border-blue-500 bg-blue-50',
    green: 'border-green-500 bg-green-50',
    purple: 'border-purple-500 bg-purple-50',
    orange: 'border-orange-500 bg-orange-50'
  };

  return (
    <div className={`border-l-4 ${colorClasses[color]} p-4 rounded-r-lg shadow-sm`}>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
}