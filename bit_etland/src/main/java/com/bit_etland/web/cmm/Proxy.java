package com.bit_etland.web.cmm;

import java.io.File;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.apache.commons.fileupload.servlet.ServletRequestContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import lombok.Data;

@Component @Data @Lazy
public class Proxy {
	private int pageNum, pageSize, blockSize,totalCount,blockNum,
	startRow,endRow,startPage,endPage,prevBlock,nextBlock,pageCount;
	private boolean existPrev, existnext;
	private String search;
	@Autowired Image img;
	public void carryOut(Map<?,?> paramMap) {
		search= (String) paramMap.get("search");
		
		pageNum = (paramMap.get("pageNum")==null)?1: Integer.parseInt((String) paramMap.get("pageNum"));
		pageSize = (paramMap.get("pageSize")==null)?5: Integer.parseInt((String)paramMap.get("pageSize"));
		blockSize = (paramMap.get("blockSize")==null)?5:Integer.parseInt((String)paramMap.get("blockSize"));
		blockNum = (paramMap.get("block_num")==null)?0:Integer.parseInt((String)paramMap.get("block_num"));
		
		totalCount = (int) paramMap.get("totalCount");
		
		startRow = pageSize*(pageNum-1);
		endRow = pageNum * pageSize;
		endRow = (totalCount > endRow)?endRow:totalCount;
		pageCount = totalCount/pageSize;
		
		if(totalCount%pageSize!=0) {
			pageCount++;
		}
		blockNum = (int)Math.floor((pageNum-1)/ blockSize);
		startPage = blockNum*blockSize+1;
		endPage = startPage+(blockSize-1);
		if(endPage>pageCount) {
			endPage=pageCount;
		}
		existPrev = (blockSize>=pageNum)?false:true;
		existnext = (pageCount<=(startPage + pageSize))?false:true;
		prevBlock = startPage - pageSize;
		nextBlock = startPage + pageSize;
		}
		public void fileUpload(String customerID) {
			FileItemFactory factory = new DiskFileItemFactory();
			ServletFileUpload upload = new ServletFileUpload(factory);
			upload.setFileSizeMax(1024 * 1024 * 40); //40 MB
			upload.setSizeMax(1024 * 1024 * 50); //50 MB
			List<FileItem> items = null;
			try {
				File file = null;
				/*items = upload.parseRequest(new ServletRequestContext(request));*/
				Iterator<FileItem> it = items.iterator();
				while(it.hasNext()) {
					FileItem item = it.next();
					if(!item.isFormField()) {
						String fileName = item.getName();
						file = new File(""+fileName);
						item.write(file);
						img.setImgName(fileName.substring(0,fileName.indexOf(".")));
						img.setImgExtention(fileName.substring(fileName.indexOf(".")+1));
						img.setOwner(customerID);
						//DB 에 입력하기
					}
				}
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
}