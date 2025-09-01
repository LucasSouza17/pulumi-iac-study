import * as aws from "@pulumi/aws";

const bucket = new aws.s3.Bucket("primeiro-bucket", {
  bucket: 'primeiro-bucket-pulumi-pos-rocketseat',
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

export const bucketName = bucket.id;
export const bucketInfo = bucket.bucket;
export const bucketArn = bucket.arn;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl;
