import { View, Text, ScrollView, useWindowDimensions } from 'react-native';
import { systemBlue, systemGreen, systemRed, systemOrange, label, secondaryLabel, systemBackground, secondarySystemBackground } from '@bacons/apple-colors';

type MacBookModel = {
  name: string;
  chip: string;
  cpu: string;
  gpu: string;
  memory: string[];
  storage: string[];
  display: string;
  size: string;
  battery: string;
  price: number;
  color: string;
};

const macbooks: MacBookModel[] = [
  {
    name: 'MacBook Air 13"',
    chip: 'M3',
    cpu: '8-core CPU',
    gpu: '8/10-core GPU',
    memory: ['8GB', '16GB', '24GB'],
    storage: ['256GB', '512GB', '1TB', '2TB'],
    display: '13.6" Liquid Retina',
    size: '2.7 lbs',
    battery: 'Up to 18 hours',
    price: 1099,
    color: systemBlue as string,
  },
  {
    name: 'MacBook Air 15"',
    chip: 'M3',
    cpu: '8-core CPU',
    gpu: '10-core GPU',
    memory: ['8GB', '16GB', '24GB'],
    storage: ['256GB', '512GB', '1TB', '2TB'],
    display: '15.3" Liquid Retina',
    size: '3.3 lbs',
    battery: 'Up to 18 hours',
    price: 1299,
    color: systemBlue as string,
  },
  {
    name: 'MacBook Pro 14"',
    chip: 'M4/M4 Pro/M4 Max',
    cpu: 'Up to 16-core CPU',
    gpu: 'Up to 40-core GPU',
    memory: ['16GB', '24GB', '32GB', '48GB', '64GB', '128GB'],
    storage: ['512GB', '1TB', '2TB', '4TB', '8TB'],
    display: '14.2" Liquid Retina XDR',
    size: '3.4-3.6 lbs',
    battery: 'Up to 24 hours',
    price: 1599,
    color: systemOrange as string,
  },
  {
    name: 'MacBook Pro 16"',
    chip: 'M4 Pro/M4 Max',
    cpu: 'Up to 16-core CPU',
    gpu: 'Up to 40-core GPU',
    memory: ['24GB', '32GB', '48GB', '64GB', '128GB'],
    storage: ['512GB', '1TB', '2TB', '4TB', '8TB'],
    display: '16.2" Liquid Retina XDR',
    size: '4.7-4.8 lbs',
    battery: 'Up to 24 hours',
    price: 2499,
    color: systemRed as string,
  },
];

const ComparisonRow = ({ title, values }: { title: string; values: string[] }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={{ color: secondaryLabel as any, fontSize: 13, fontWeight: '600', marginBottom: 8, paddingHorizontal: 16 }}>
        {title.toUpperCase()}
      </Text>
      <View style={{ flexDirection: 'row', gap: 12, paddingHorizontal: 16 }}>
        {values.map((value, index) => (
          <View
            key={index}
            style={{
              flex: 1,
              backgroundColor: secondarySystemBackground as any,
              padding: 16,
              borderRadius: 12,
              borderCurve: 'continuous',
            }}
          >
            <Text style={{ color: label as any, fontSize: 15, fontWeight: '500' }}>{value}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default function Index() {
  const { width } = useWindowDimensions();
  const isCompact = width < 700;

  if (isCompact) {
    return (
      <ScrollView
        style={{ flex: 1, backgroundColor: systemBackground as any }}
        contentInsetAdjustmentBehavior="automatic"
      >
        <View style={{ padding: 16, gap: 20, paddingBottom: 40 }}>
          <View style={{ gap: 8, marginTop: 8 }}>
            <Text style={{ color: label as any, fontSize: 34, fontWeight: 'bold' }}>
              MacBook Comparison
            </Text>
            <Text style={{ color: secondaryLabel as any, fontSize: 17 }}>
              Compare modern MacBooks to find your perfect match
            </Text>
          </View>

          {macbooks.map((mac, index) => (
            <View
              key={index}
              style={{
                backgroundColor: secondarySystemBackground as any,
                borderRadius: 16,
                borderCurve: 'continuous',
                padding: 20,
                gap: 16,
              }}
            >
              <View style={{ gap: 4 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <View
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: mac.color,
                    }}
                  />
                  <Text style={{ color: label as any, fontSize: 24, fontWeight: 'bold' }}>
                    {mac.name}
                  </Text>
                </View>
                <Text style={{ color: systemGreen as any, fontSize: 20, fontWeight: '600' }}>
                  From ${mac.price.toLocaleString()}
                </Text>
              </View>

              <View style={{ gap: 12 }}>
                <SpecRow label="Chip" value={mac.chip} />
                <SpecRow label="CPU" value={mac.cpu} />
                <SpecRow label="GPU" value={mac.gpu} />
                <SpecRow label="Memory" value={mac.memory.join(', ')} />
                <SpecRow label="Storage" value={mac.storage.join(', ')} />
                <SpecRow label="Display" value={mac.display} />
                <SpecRow label="Weight" value={mac.size} />
                <SpecRow label="Battery" value={mac.battery} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: systemBackground as any }}
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={{ padding: 24, paddingBottom: 60 }}>
        <View style={{ gap: 8, marginBottom: 32, marginTop: 8 }}>
          <Text style={{ color: label as any, fontSize: 34, fontWeight: 'bold' }}>
            MacBook Comparison
          </Text>
          <Text style={{ color: secondaryLabel as any, fontSize: 17 }}>
            Compare modern MacBooks side-by-side to find your perfect match
          </Text>
        </View>

        {/* Header with model names and prices */}
        <View style={{ flexDirection: 'row', gap: 12, marginBottom: 24, paddingHorizontal: 16 }}>
          {macbooks.map((mac, index) => (
            <View key={index} style={{ flex: 1, gap: 8 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <View
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: mac.color,
                  }}
                />
                <Text style={{ color: label as any, fontSize: 17, fontWeight: '600' }}>
                  {mac.name}
                </Text>
              </View>
              <Text style={{ color: systemGreen as any, fontSize: 15, fontWeight: '600' }}>
                From ${mac.price.toLocaleString()}
              </Text>
            </View>
          ))}
        </View>

        {/* Comparison rows */}
        <View style={{ gap: 20 }}>
          <ComparisonRow title="Chip" values={macbooks.map((m) => m.chip)} />
          <ComparisonRow title="CPU" values={macbooks.map((m) => m.cpu)} />
          <ComparisonRow title="GPU" values={macbooks.map((m) => m.gpu)} />
          <ComparisonRow
            title="Memory Options"
            values={macbooks.map((m) => m.memory.join(', '))}
          />
          <ComparisonRow
            title="Storage Options"
            values={macbooks.map((m) => m.storage.join(', '))}
          />
          <ComparisonRow title="Display" values={macbooks.map((m) => m.display)} />
          <ComparisonRow title="Weight" values={macbooks.map((m) => m.size)} />
          <ComparisonRow title="Battery Life" values={macbooks.map((m) => m.battery)} />
        </View>
      </View>
    </ScrollView>
  );
}

const SpecRow = ({ label, value }: { label: string; value: string }) => (
  <View style={{ gap: 4 }}>
    <Text style={{ color: secondaryLabel as any, fontSize: 13, fontWeight: '600' }}>
      {label.toUpperCase()}
    </Text>
    <Text style={{ color: label as any, fontSize: 15 }}>{value}</Text>
  </View>
);
