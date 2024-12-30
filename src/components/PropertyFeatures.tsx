interface PropertyFeaturesProps {
  features: string[];
}

export function PropertyFeatures({ features }: PropertyFeaturesProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Features</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-2 text-gray-600"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}