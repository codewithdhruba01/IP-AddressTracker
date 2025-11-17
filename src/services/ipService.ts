import { IPData } from '../types';

export async function searchIP(ipAddress: string): Promise<IPData> {
  const ip = ipAddress.trim() || '';

  const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,message,country,countryCode,region,regionName,city,lat,lon,timezone,isp,org,as,query`);

  if (!response.ok) {
    throw new Error('Failed to fetch IP information');
  }

  const data = await response.json();

  if (data.status === 'fail') {
    throw new Error(data.message || 'Invalid IP address');
  }

  return {
    ip: data.query,
    city: data.city || 'Unknown',
    region: data.regionName || 'Unknown',
    country: data.country || 'Unknown',
    countryCode: data.countryCode || '',
    latitude: data.lat || 0,
    longitude: data.lon || 0,
    timezone: data.timezone || 'Unknown',
    isp: data.isp || 'Unknown',
    org: data.org || 'Unknown',
    as: data.as || 'Unknown',
  };
}
