// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package scaleway

import (
	"context"
	"reflect"

	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
)

// Gets information about a public gateway.
//
// ## Example Usage
//
// ```go
// package main
//
// import (
// 	"github.com/pulumi/pulumi-scaleway/sdk/go/scaleway"
// 	"github.com/pulumi/pulumi/sdk/v3/go/pulumi"
// )
//
// func main() {
// 	pulumi.Run(func(ctx *pulumi.Context) error {
// 		main, err := scaleway.NewVpcPublicGateway(ctx, "main", &scaleway.VpcPublicGatewayArgs{
// 			Type: pulumi.String("VPC-GW-S"),
// 		})
// 		if err != nil {
// 			return err
// 		}
// 		return nil
// 	})
// }
// ```
func LookupVpcPublicGateway(ctx *pulumi.Context, args *LookupVpcPublicGatewayArgs, opts ...pulumi.InvokeOption) (*LookupVpcPublicGatewayResult, error) {
	var rv LookupVpcPublicGatewayResult
	err := ctx.Invoke("scaleway:index/getVpcPublicGateway:getVpcPublicGateway", args, &rv, opts...)
	if err != nil {
		return nil, err
	}
	return &rv, nil
}

// A collection of arguments for invoking getVpcPublicGateway.
type LookupVpcPublicGatewayArgs struct {
	// Exact name of the public gateway.
	Name            *string `pulumi:"name"`
	PublicGatewayId *string `pulumi:"publicGatewayId"`
}

// A collection of values returned by getVpcPublicGateway.
type LookupVpcPublicGatewayResult struct {
	CreatedAt string `pulumi:"createdAt"`
	// The provider-assigned unique ID for this managed resource.
	Id                 string   `pulumi:"id"`
	IpId               string   `pulumi:"ipId"`
	Name               *string  `pulumi:"name"`
	OrganizationId     string   `pulumi:"organizationId"`
	ProjectId          string   `pulumi:"projectId"`
	PublicGatewayId    *string  `pulumi:"publicGatewayId"`
	Tags               []string `pulumi:"tags"`
	Type               string   `pulumi:"type"`
	UpdatedAt          string   `pulumi:"updatedAt"`
	UpstreamDnsServers []string `pulumi:"upstreamDnsServers"`
	Zone               string   `pulumi:"zone"`
}

func LookupVpcPublicGatewayOutput(ctx *pulumi.Context, args LookupVpcPublicGatewayOutputArgs, opts ...pulumi.InvokeOption) LookupVpcPublicGatewayResultOutput {
	return pulumi.ToOutputWithContext(context.Background(), args).
		ApplyT(func(v interface{}) (LookupVpcPublicGatewayResult, error) {
			args := v.(LookupVpcPublicGatewayArgs)
			r, err := LookupVpcPublicGateway(ctx, &args, opts...)
			return *r, err
		}).(LookupVpcPublicGatewayResultOutput)
}

// A collection of arguments for invoking getVpcPublicGateway.
type LookupVpcPublicGatewayOutputArgs struct {
	// Exact name of the public gateway.
	Name            pulumi.StringPtrInput `pulumi:"name"`
	PublicGatewayId pulumi.StringPtrInput `pulumi:"publicGatewayId"`
}

func (LookupVpcPublicGatewayOutputArgs) ElementType() reflect.Type {
	return reflect.TypeOf((*LookupVpcPublicGatewayArgs)(nil)).Elem()
}

// A collection of values returned by getVpcPublicGateway.
type LookupVpcPublicGatewayResultOutput struct{ *pulumi.OutputState }

func (LookupVpcPublicGatewayResultOutput) ElementType() reflect.Type {
	return reflect.TypeOf((*LookupVpcPublicGatewayResult)(nil)).Elem()
}

func (o LookupVpcPublicGatewayResultOutput) ToLookupVpcPublicGatewayResultOutput() LookupVpcPublicGatewayResultOutput {
	return o
}

func (o LookupVpcPublicGatewayResultOutput) ToLookupVpcPublicGatewayResultOutputWithContext(ctx context.Context) LookupVpcPublicGatewayResultOutput {
	return o
}

func (o LookupVpcPublicGatewayResultOutput) CreatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v LookupVpcPublicGatewayResult) string { return v.CreatedAt }).(pulumi.StringOutput)
}

// The provider-assigned unique ID for this managed resource.
func (o LookupVpcPublicGatewayResultOutput) Id() pulumi.StringOutput {
	return o.ApplyT(func(v LookupVpcPublicGatewayResult) string { return v.Id }).(pulumi.StringOutput)
}

func (o LookupVpcPublicGatewayResultOutput) IpId() pulumi.StringOutput {
	return o.ApplyT(func(v LookupVpcPublicGatewayResult) string { return v.IpId }).(pulumi.StringOutput)
}

func (o LookupVpcPublicGatewayResultOutput) Name() pulumi.StringPtrOutput {
	return o.ApplyT(func(v LookupVpcPublicGatewayResult) *string { return v.Name }).(pulumi.StringPtrOutput)
}

func (o LookupVpcPublicGatewayResultOutput) OrganizationId() pulumi.StringOutput {
	return o.ApplyT(func(v LookupVpcPublicGatewayResult) string { return v.OrganizationId }).(pulumi.StringOutput)
}

func (o LookupVpcPublicGatewayResultOutput) ProjectId() pulumi.StringOutput {
	return o.ApplyT(func(v LookupVpcPublicGatewayResult) string { return v.ProjectId }).(pulumi.StringOutput)
}

func (o LookupVpcPublicGatewayResultOutput) PublicGatewayId() pulumi.StringPtrOutput {
	return o.ApplyT(func(v LookupVpcPublicGatewayResult) *string { return v.PublicGatewayId }).(pulumi.StringPtrOutput)
}

func (o LookupVpcPublicGatewayResultOutput) Tags() pulumi.StringArrayOutput {
	return o.ApplyT(func(v LookupVpcPublicGatewayResult) []string { return v.Tags }).(pulumi.StringArrayOutput)
}

func (o LookupVpcPublicGatewayResultOutput) Type() pulumi.StringOutput {
	return o.ApplyT(func(v LookupVpcPublicGatewayResult) string { return v.Type }).(pulumi.StringOutput)
}

func (o LookupVpcPublicGatewayResultOutput) UpdatedAt() pulumi.StringOutput {
	return o.ApplyT(func(v LookupVpcPublicGatewayResult) string { return v.UpdatedAt }).(pulumi.StringOutput)
}

func (o LookupVpcPublicGatewayResultOutput) UpstreamDnsServers() pulumi.StringArrayOutput {
	return o.ApplyT(func(v LookupVpcPublicGatewayResult) []string { return v.UpstreamDnsServers }).(pulumi.StringArrayOutput)
}

func (o LookupVpcPublicGatewayResultOutput) Zone() pulumi.StringOutput {
	return o.ApplyT(func(v LookupVpcPublicGatewayResult) string { return v.Zone }).(pulumi.StringOutput)
}

func init() {
	pulumi.RegisterOutputType(LookupVpcPublicGatewayResultOutput{})
}
