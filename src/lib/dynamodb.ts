import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient, ScanCommand, PutCommand } from '@aws-sdk/lib-dynamodb';
import { SAMPLE_UNIVERSITIES, SAMPLE_SCHOLARSHIPS, SAMPLE_BLOGS } from './data';
import { University } from '@/types/university';
import { Scholarship } from '@/types/scholarship';
import { BlogPost, Contact } from '@/types/blog';

// Check if AWS environment variables are configured
const isAwsConfigured = 
  process.env.AWS_ACCESS_KEY_ID && 
  process.env.AWS_SECRET_ACCESS_KEY && 
  process.env.AWS_REGION;

let ddbDocClient: DynamoDBDocumentClient | null = null;

if (isAwsConfigured) {
  try {
    const client = new DynamoDBClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || '',
      }
    });
    ddbDocClient = DynamoDBDocumentClient.from(client);
    console.log('DynamoDB successfully initialized');
  } catch (error) {
    console.error('Failed to initialize DynamoDB client, falling back to mock data:', error);
  }
} else {
  console.log('DynamoDB environment variables not fully configured. Using static mock database fallback.');
}

// ----------------------------------------------------
// DB Service Operations
// ----------------------------------------------------

export async function getUniversities(): Promise<University[]> {
  if (ddbDocClient) {
    try {
      const command = new ScanCommand({ TableName: 'Universities' });
      const response = await ddbDocClient.send(command);
      if (response.Items && response.Items.length > 0) {
        return response.Items as University[];
      }
    } catch (error) {
      console.warn('Error reading Universities from DynamoDB. Falling back to local mock data.', error);
    }
  }
  return SAMPLE_UNIVERSITIES;
}

export async function getUniversityBySlug(slug: string): Promise<University | null> {
  const list = await getUniversities();
  return list.find(u => u.slug === slug) || null;
}

export async function getScholarships(): Promise<Scholarship[]> {
  if (ddbDocClient) {
    try {
      const command = new ScanCommand({ TableName: 'Scholarships' });
      const response = await ddbDocClient.send(command);
      if (response.Items && response.Items.length > 0) {
        return response.Items as Scholarship[];
      }
    } catch (error) {
      console.warn('Error reading Scholarships from DynamoDB. Falling back to local mock data.', error);
    }
  }
  return SAMPLE_SCHOLARSHIPS;
}

export async function getScholarshipBySlug(slug: string): Promise<Scholarship | null> {
  const list = await getScholarships();
  return list.find(s => s.slug === slug) || null;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  if (ddbDocClient) {
    try {
      const command = new ScanCommand({ TableName: 'BlogPosts' });
      const response = await ddbDocClient.send(command);
      if (response.Items && response.Items.length > 0) {
        return response.Items as BlogPost[];
      }
    } catch (error) {
      console.warn('Error reading BlogPosts from DynamoDB. Falling back to local mock data.', error);
    }
  }
  return SAMPLE_BLOGS;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const list = await getBlogPosts();
  return list.find(b => b.slug === slug) || null;
}

export async function saveContactInquiry(contact: Omit<Contact, 'id' | 'createdAt'>): Promise<Contact> {
  const newContact: Contact = {
    ...contact,
    id: `contact-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    createdAt: new Date().toISOString()
  };

  if (ddbDocClient) {
    try {
      const command = new PutCommand({
        TableName: 'Contacts',
        Item: newContact,
      });
      await ddbDocClient.send(command);
      console.log('Successfully saved contact inquiry to DynamoDB');
    } catch (error) {
      console.error('Error saving Contact in DynamoDB, saved locally (in-memory mock fallback)', error);
    }
  } else {
    console.log('Saved contact inquiry (in-memory mock output):', newContact);
  }

  return newContact;
}
