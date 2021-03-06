/**
 * @packageDocumentation
 * @module api.functional.bbs.customers.authenticate.password
 */
//================================================================
import { AesPkcs5 } from "./../../../../../__internal/AesPkcs5";
import { Fetcher } from "./../../../../../__internal/Fetcher";
import { Primitive } from "./../../../../../Primitive";
import type { IConnection } from "./../../../../../IConnection";

import type { IMember } from "./../../../../../structures/members/IMember";


/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller BbsCustomerAuthenticatePasswordController.change()
 * @path PUT /bbs/customers/authenticate/password/change
 */
export function change(connection: IConnection, input: Primitive<change.Input>): Promise<void>
{
    return Fetcher.fetch
    (
        connection,
        {"input_encrypted":true,"output_encrypted":false},
        "PUT",
        `/bbs/customers/authenticate/password/change`,
        input
    );
}
export namespace change
{
    export type Input = Primitive<IMember.IChangePassword>;
}

/**
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 * @controller BbsCustomerAuthenticatePasswordController.reset()
 * @path PUT /bbs/customers/authenticate/password/reset
 */
export function reset(connection: IConnection, input: Primitive<reset.Input>): Promise<void>
{
    return Fetcher.fetch
    (
        connection,
        {"input_encrypted":true,"output_encrypted":false},
        "PUT",
        `/bbs/customers/authenticate/password/reset`,
        input
    );
}
export namespace reset
{
    export type Input = Primitive<IMember.IResetPassword>;
}



//---------------------------------------------------------
// TO PREVENT THE UNUSED VARIABLE ERROR
//---------------------------------------------------------
AesPkcs5;
Fetcher;
Primitive;
