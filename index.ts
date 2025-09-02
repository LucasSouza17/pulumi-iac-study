import * as aws from "@pulumi/aws";

const firstBucket = new aws.s3.Bucket("primeiro-bucket", {
  bucket: 'primeiro-bucket-pulumi-pos-rocketseat',
  tags: {
    IAC: "true"
  }
});

const secondBucket = new aws.s3.Bucket("segundo-bucket", {
  bucket: 'segundo-bucket-pulumi-pos-rocketseat',
  tags: {
    IAC: "true"
  }
});

const ecr = new aws.ecr.Repository("primeiro-ecr", {
  name: "primeiro-ecr",
  imageTagMutability: "IMMUTABLE",
  tags: {
    IAC: "true"
  }
})

export const firstBucketName = firstBucket.id;
export const firstBucketInfo = firstBucket.bucket;
export const firstBucketArn = firstBucket.arn;

export const secondBucketName = secondBucket.id;
export const secondBucketInfo = secondBucket.bucket;
export const secondBucketArn = secondBucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
