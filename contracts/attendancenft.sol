// SPDX-License-Identifier: MIT
pragma solidity ^0.8.2;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract AttendanceJan19 is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    mapping(string => uint8) existingURIs;
    //Owner mapping to their nft
    mapping(address => uint256) owners;

    uint8 totalSupply = 60;

    constructor() ERC721("Attendance - Jan 19", "CAL-J19") {}

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://";
    }

    function safeMint(address to, string memory uri) public payable onlyOwner {
        //Making sure that NFT IDs start at 1
        if (_tokenIdCounter.current() == 0) {
            _tokenIdCounter.increment();
        }

        require(_tokenIdCounter.current() < totalSupply, 'All tokens have been minted!');
        require(existingURIs[uri] != 1, 'NFT already minted!');
        require(owners[to] == 0, 'You already have an NFT!');

        uint256 newItemId = _tokenIdCounter.current();
        owners[to] = newItemId;
        _tokenIdCounter.increment();
        existingURIs[uri] = 1;

        _mint(to, newItemId);
        _setTokenURI(newItemId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function isContentOwned(string memory uri) public view returns (bool) {
        return existingURIs[uri] == 1;
    }

    function count() public view returns (uint256) {
        return _tokenIdCounter.current();
    }
}