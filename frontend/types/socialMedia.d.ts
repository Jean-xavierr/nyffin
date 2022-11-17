// https://stackoverflow.com/questions/39040108/import-class-in-definition-file-d-ts

declare interface ISocialMedia {
  name: string;
  icon: import('react').FC<{ className: string }>;
  url: string;
}
