export interface AutocompleteUsageProps {
  options: string[];
  label: string;
  value: string | null;
  onChange: (value: string | null) => void;
  gradients: Record<string, string>;
}
