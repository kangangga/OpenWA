import { useEffect, useState } from 'react';
import { infraApi, type InfraLayout } from '../services/api';

export function useInfraLayout() {
  const [layout, setLayout] = useState<InfraLayout | null>(null);

  useEffect(() => {
    const fetchLayout = async () => {
      try {
        const response = await infraApi.getLayout();
        setLayout(response);
      } catch (error) {
        console.error('Failed to fetch infra layout:', error);
      }
    };
    fetchLayout();
  }, []);

  return layout;
}
//   const api = infraApi.getLayout();
