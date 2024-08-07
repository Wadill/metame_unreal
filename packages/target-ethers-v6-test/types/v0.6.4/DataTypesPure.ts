/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace DataTypesPure {
  export type Struct1Struct = {
    uint256_0: BigNumberish;
    uint256_1: BigNumberish;
  };

  export type Struct1StructOutput = [uint256_0: bigint, uint256_1: bigint] & {
    uint256_0: bigint;
    uint256_1: bigint;
  };
}

export interface DataTypesPureInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "pure_address"
      | "pure_bool"
      | "pure_bytes"
      | "pure_bytes1"
      | "pure_enum"
      | "pure_int256"
      | "pure_int8"
      | "pure_named"
      | "pure_stat_array"
      | "pure_string"
      | "pure_struct"
      | "pure_tuple"
      | "pure_uint256"
      | "pure_uint8"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "pure_address",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pure_bool", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pure_bytes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_bytes1",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pure_enum", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pure_int256",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pure_int8", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pure_named",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_stat_array",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_string",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_struct",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_tuple",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_uint256",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "pure_uint8",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "pure_address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_bool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pure_bytes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pure_bytes1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_enum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pure_int256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_int8", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pure_named", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pure_stat_array",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pure_string",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "pure_struct",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_tuple", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pure_uint256",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pure_uint8", data: BytesLike): Result;
}

export interface DataTypesPure extends BaseContract {
  connect(runner?: ContractRunner | null): DataTypesPure;
  waitForDeployment(): Promise<this>;

  interface: DataTypesPureInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  pure_address: TypedContractMethod<[], [string], "view">;

  pure_bool: TypedContractMethod<[], [boolean], "view">;

  pure_bytes: TypedContractMethod<[], [string], "view">;

  pure_bytes1: TypedContractMethod<[], [string], "view">;

  pure_enum: TypedContractMethod<[], [bigint], "view">;

  pure_int256: TypedContractMethod<[], [bigint], "view">;

  pure_int8: TypedContractMethod<[], [bigint], "view">;

  pure_named: TypedContractMethod<
    [],
    [[bigint, bigint] & { uint256_1: bigint; uint256_2: bigint }],
    "view"
  >;

  pure_stat_array: TypedContractMethod<[], [[bigint, bigint, bigint]], "view">;

  pure_string: TypedContractMethod<[], [string], "view">;

  pure_struct: TypedContractMethod<
    [],
    [DataTypesPure.Struct1StructOutput],
    "view"
  >;

  pure_tuple: TypedContractMethod<[], [[bigint, bigint]], "view">;

  pure_uint256: TypedContractMethod<[], [bigint], "view">;

  pure_uint8: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "pure_address"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pure_bool"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "pure_bytes"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pure_bytes1"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pure_enum"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pure_int256"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pure_int8"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pure_named"
  ): TypedContractMethod<
    [],
    [[bigint, bigint] & { uint256_1: bigint; uint256_2: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "pure_stat_array"
  ): TypedContractMethod<[], [[bigint, bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "pure_string"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pure_struct"
  ): TypedContractMethod<[], [DataTypesPure.Struct1StructOutput], "view">;
  getFunction(
    nameOrSignature: "pure_tuple"
  ): TypedContractMethod<[], [[bigint, bigint]], "view">;
  getFunction(
    nameOrSignature: "pure_uint256"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "pure_uint8"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
